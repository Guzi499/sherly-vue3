pipeline {
    agent {
        docker {
            image 'node:12-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('yarn 构建') {
            steps {
                sh 'node -v'
                sh 'yarn -v'
                sh 'yarn'
                sh 'yarn build'
            }
        }
        stage('远程部署') {
            steps{
                sshPublisher(publishers: [sshPublisherDesc(configName: 'tencentcloud', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/root/nginx/html', remoteDirectorySDF: false, removePrefix: 'sherly-vue3/dist/', sourceFiles: 'sherly-vue3/dist/**')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
    }
}