const app_name = 'kalvin';

export function basePath() {
    if (process.env.NODE_ENV === 'production') {
        return `https://${app_name}.herokuapp.com`;
    }
    else {
        return 'http://localhost:5000';
    }
}

