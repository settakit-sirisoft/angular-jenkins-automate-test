
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
        namespace = "$project" + '-' + "$env" //
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
                // sh 'echo "e2e Tests"'
            }
        }

        stage('Archieve Result Automate Testing'){
            steps{
                script{
                    archiveArtifacts artifacts: 'cypress/videos/*.mp4'
                }
            }
        }

        stage('Build DockerFile And Push') {
          steps {
            script {
              // sh 'docker build -t settawat/"${serviceName}:"${version_tag} -f Dockerfile .'
              docker.withRegistry('', "${env.dockerCredential}") {
                a = docker.build('sjanpuk' + '/' + "${serviceName}" + ':' + "${version_tag}", '-f Dockerfile .')
                a.push()
              }
            }
          }
        }

        stage('Apply Environment variable to deployment file') {
          steps {
            script {
              sh 'envsubst < manifests/deployment_template.yaml > manifests/deployment.yaml'
              sh 'envsubst < manifests/service_template.yaml > manifests/service.yaml'
              sh 'envsubst < manifests/ingress_template.yaml > manifests/ingress.yaml'
            }
          }
        }

        stage('Archieve Manifest File'){
          steps{
              script{
                  archiveArtifacts artifacts: 'manifests/**/*.yaml'
              }
          }
        }

        stage('create secret and deploy app to kube cluster') {
          agent {
            docker {
              image 'alpine/k8s:1.19.8'
              reuseNode true
            }
          }
          steps {
            withKubeConfig(caCertificate: '', clusterName: 'docker-desktop', contextName: 'docker-desktop', credentialsId: 'kubeConfig', namespace: 'default', serverUrl: '192.168.65.4:6443') {
            // some block
              script {
                  sh '''
                        ls -al manifests
                        cat manifests/deployment.yaml
                        cat manifests/service.yaml
                        cat manifests/ingress.yaml
                        kubectl create secret generic $serviceName-${env.env}-secret --from-env-file=$serviceEnv -n $namespace -o yaml --dry-run | kubectl replace -f -
                        kubectl apply -n $namespace -f manifests/deployment.yaml
                        kubectl apply -n $namespace -f manifests/service.yaml
                        kubectl apply -n $namespace -f manifests/ingress.yaml
                        '''
                  sh 'kubectl get no'
              }
            }
          }
        }

        // stage('Remove cypress folder') {
        //   steps {
        //     script {
        //       sh "rm -rf results/*"
        //     }
        //   }
        // }
    }

    // post {
    //     always {
    //         junit 'results/cypress-report.xml'
    //     }
    // }
}
