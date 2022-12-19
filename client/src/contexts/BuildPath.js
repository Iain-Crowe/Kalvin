const app_name = 'kalvin';

export function basePath() {
    if (process.env.NODE_ENV === 'production') {
        return 'ERROR: SERVER NOT SET UP';
    }
    else {
        return 'http://localhost:5000';
    }
}

