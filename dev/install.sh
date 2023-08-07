echo -e "\e[1;32m sudo yum update -y \e[0m"
sudo yum update -y

echo -e "\e[1;32m sudo yum install -y yum-utils device-mapper-persistent-data lvm2 \e[0m"
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

echo -e "\e[1;32m sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo  \e[0m"
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 

echo -e "\e[1;32m sudo yum install -y docker-ce \e[0m"
sudo yum install -y docker-ce 

echo -e "\e[1;32m sudo systemctl enable docker \e[0m"
sudo systemctl enable docker 

echo -e "\e[1;32m sudo systemctl start docker \e[0m"
sudo systemctl start docker 

echo -e "\e[1;32m sudo systemctl status docker \e[0m"
sudo systemctl status docker 

echo -e "\e[1;32m sudo curl docker-compose \e[0m"
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose 

echo -e "\e[1;32m sudo chmod +x /usr/local/bin/docker-compose \e[0m" 
sudo chmod +x /usr/local/bin/docker-compose

echo -e "\e[1;32m sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose \e[0m"
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose 

echo -e "\e[1;32m sudo docker-compose --version \e[0m"
sudo docker-compose --version 

echo -e "\e[1;32m sudo docker network create ecm-dev-network \e[0m"
sudo docker network create ecm-dev-network

echo -e "\e[1;32m mkdir ~/file-uploads-ecm \e[0m"
mkdir ~/file-uploads-ecm

cd ~/ecm-deployment/dev
sudo docker-compose up -f docker-compose-database.yml -d
sudo docker-compose up -f docker-compose-application.yml -d
