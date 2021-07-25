
pipeline {
    agent any

    tools {
      nodejs "NodeJSInstaller"
      dockerTool  'DockerInstaller'
    }


    environment {
        CHROME_BIN = '/bin/google-chrome'
        env = 'dev'
        dockerCredential = 'dockerCredential'
        version_tag = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
        nodeJSImage = 'node:lts-alpine'
        serviceName = 'testcicd' // Replace your serviceName
        imageName = "$serviceName"  // <prefix>/serviceName // prefix = project name
        project = 'demo-service'
        namespace = "$project" + '-' + "$env"
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
              sh 'docker build -t settawat/"${serviceName:"${version_tag} -f Dockerfile .}'
              // docker.withRegistry('', "${env.dockerCredential}") {
              //   a = docker.build('settawat' + '/' + "${serviceName}" + ':' + "${version_tag}", '-f Dockerfile .')
              // }
              // docker.withRegistry('', "${env.dockerCredential}") {
              //   a.push()
              // }
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
