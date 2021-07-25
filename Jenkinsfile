
pipeline {
    agent any

    tools {nodejs "NodeJSInstaller"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        // stage('Unit Tests') {
        //     steps {
        //         sh 'npm run test'
        //     }
        // }
        stage('e2e Tests') {
            steps {
                sh 'npm run cypress:ci'
            }
        }

        stage('Build DockerFile And Push') {
          steps {
            script {
              docker.withRegistry('', "${env.dockerCredential}") {
                a = docker.build('settawat' + '/' + "${serviceName}" + ':' + "${version_tag}", '-f Dockerfile .')
              }
              docker.withRegistry('', "${env.dockerCredential}") {
                a.push()
              }
            }
          }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
