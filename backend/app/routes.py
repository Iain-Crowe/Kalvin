from typing import TYPE_CHECKING

from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

from app import db
from app.models import User, Task

main_bp = Blueprint('main', __name__)

@main_bp.route('/register', methods=['POST'], endpoint='register')
def register():
    data = request.get_json()

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
        return jsonify({'msg': 'User already exists'}), 400
    
    user = User(username=username, email=email)
    user.set_password(password)

    db.session.add(user)
    db.session.commit()

    return jsonify({'msg': 'User registered successfully'}), 201

@main_bp.route('/login', methods=['POST'], endpoint='login')
def login():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if user is None or not user.check_password(password):
        return jsonify({'msg': 'Invalid credentials'}), 401
    
    access_token = create_access_token(identity=user.id)

    return jsonify(access_token=access_token), 200

@main_bp.route('/tasks', methods=['GET', 'POST'], endpoint='tasks')
@jwt_required()
def tasks():
    if request.method == 'GET':
        user_id = get_jwt_identity()
        tasks = Task.query.filter_by(user_id=user_id).all()
        return jsonify([task.to_dict() for task in tasks])
    elif request.method == 'POST':
        data = request.get_json()

        user_id = get_jwt_identity()
        task = Task(title=data['title'], description=data['description'], user_id=user_id)

        db.session.add(task)
        db.session.commit()

        return jsonify(task.to_dict()), 201
    
@main_bp.route('/tasks/<int:id>', methods=['PUT', 'DELETE'], endpoint='update_delete_task')
@jwt_required()
def update_delete_task(id):
    task = Task.query.get_or_404(id)

    if task.user_id != get_jwt_identity():
        return jsonify({'msg': 'Permission denied'}), 403
    
    if request.method == 'PUT':
        data = request.get_json()

        task.title = data['title']
        task.description = data['description']
        task.status = data.get('status', task.status)

        db.session.commit()

        return jsonify(task.to_dict()), 200
    elif request.method == 'DELETE':
        db.session.delete(task)
        db.session.commit()

        return jsonify({'msg': 'Task deleted'}), 200