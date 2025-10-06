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

    stage('') {
      steps {
        sh 'git push'
      }
    }

  }
}