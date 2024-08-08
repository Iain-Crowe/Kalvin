import json

from flask.testing import FlaskClient

def test_register(test_client: FlaskClient) -> None:
    response = test_client.post('/register', data=json.dumps({
        'username': 'testuser',
        'email': 'test@example.com',
        'password': 'testpassword'
    }), content_type='application/json')

    assert response.status_code == 201
    data = json.loads(response.data)
    assert data['msg'] == 'User registered successfully'

def test_login(test_client: FlaskClient) -> None:
    response = test_client.post('/login', data=json.dumps({
        'email': 'test@example.com',
        'password': 'testpassword'
    }), content_type='application/json')

    assert response.status_code == 200
    data = json.loads(response.data)
    assert 'access_token' in data

def test_create_task(test_client: FlaskClient) -> None:
    login_response = test_client.post('/login', data=json.dumps({
        'email': 'test@example.com',
        'password': 'testpassword'
    }), content_type='application/json')

    access_token = json.loads(login_response.data)['access_token']

    response = test_client.post('/tasks', data=json.dumps({
        'title': 'Test Task',
        'description': 'This is a test task'
    }), headers={'Authorization': f'Bearer {access_token}'}, content_type='application/json')

    assert response.status_code == 201
    data = json.loads(response.data)
    assert data['title'] == 'Test Task'
    assert data['description'] == 'This is a test task'

def test_get_tasks(test_client: FlaskClient) -> None:
    login_response = test_client.post('/login', data=json.dumps({
        'email': 'test@example.com',
        'password': 'testpassword'
    }), content_type='application/json')

    access_token = json.loads(login_response.data)['access_token']

    response = test_client.get('/tasks', headers={'Authorization': f'Bearer {access_token}'})
    
    assert response.status_code == 200
    data = json.loads(response.data)
    assert isinstance(data, list)