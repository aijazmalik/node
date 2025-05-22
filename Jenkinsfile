pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/aijazmalik/node.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Stop Previous Server') {
            steps {
                sh 'fuser -k 3000/tcp || true'
            }
        }

        stage('Start Server') {
            steps {
                sh 'nohup npm start > output.log 2>&1 &'
            }
        }
    }
}
