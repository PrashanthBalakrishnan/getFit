pipeline {
  agent any
  stages {
    stage('Echo') {
      steps {
        sh 'echo "hello world"'
      }
    }

    stage('install packages') {
      steps {
        sh 'npm i -y'
      }
    }

  }
}