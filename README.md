CI/CD Demo Project

This is a CI/CD pipeline demo project using Jenkins to automate the process of building, testing, and deploying the application. The demo demonstrates how to set up a basic pipeline that integrates with GitHub to automatically build and deploy code changes.

Features

Continuous Integration (CI): Automatically trigger builds when changes are pushed to the repository.
Continuous Deployment (CD): Automate the deployment of code to your environment after a successful build.
GitHub Integration: Using webhooks to trigger builds automatically upon new commits or PR merges.
Prerequisites

Jenkins installed on your machine (Mac/Linux/Windows).
Docker (if using containerized builds).
A GitHub repository with the project you want to build.
Jenkins plugins: Git, GitHub, and any additional plugins required for your build process (e.g., Docker).

Jenkins Setup

Install Required Plugins:
Git Plugin
GitHub Plugin
Docker Plugin (if using Docker)
Pipeline Plugin
Configure Global Tools:
Git: Ensure Git is installed and configured in Global Tool Configuration.

Setting Up the Project

Clone this repository:
git clone https://github.com/yourusername/ci-cd-demo.git
cd ci-cd-demo

Install Jenkins: Follow the official Jenkins installation guide for your operating system.

Set Up GitHub Webhooks:
Go to your GitHub repository → Settings → Webhooks.
Add a webhook with the URL: http://<your-jenkins-server>/github-webhook/.
Ensure the webhook is set to trigger on push events.

Create a Jenkins Pipeline Job:
Go to Jenkins → New Item → Select Pipeline.
