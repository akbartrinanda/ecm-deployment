echo -e "\e[1;32msudo yum update -y\e[0m"
sudo yum update -y
echo -e "\e[1;32msudo yum install -y yum-utils device-mapper-persistent-data lvm2\e[0m"
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
echo -e "\e[1;32msudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo \e[0m"
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 
echo -e "\e[1;32msudo yum install -y docker-ce \e[0m"
sudo yum install -y docker-ce 
echo -e "\e[1;32msudo systemctl enable docker \e[0m"
sudo systemctl enable docker 
echo -e "\e[1;32msudo systemctl start docker \e[0m"
sudo systemctl start docker 
echo -e "\e[1;32msudo systemctl status docker \e[0m"
sudo systemctl status docker 
echo -e "\e[1;32msudo curl docker-compose \e[0m"
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose 
echo -e "\e[1;32msudo chmod +x /usr/local/bin/docker-compose\e[0m" 
sudo chmod +x /usr/local/bin/docker-compose
echo -e "\e[1;32msudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose \e[0m"
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose 
echo -e "\e[1;32msudo docker-compose --version \e[0m"
sudo docker-compose --version 
echo -e "\e[1;32mmkdir ~/uploads-polda\e[0m"
mkdir ~/uploads-polda
echo -e "\e[1;32mmkdir ~/uploads-polri\e[0m"
mkdir ~/uploads-polri
echo -e "\e[1;32mcd ~/bpkb-deployment/dev/bpkb-database-host && docker-compose down && docker-compose up -d --build\e[0m"
cd ~/bpkb-deployment/dev/bpkb-database-host && sudo docker-compose down && sudo docker-compose up -d --build
echo -e "\e[1;32mcd ~/bpkb-deployment/dev/bpkb-application-host && docker-compose down && docker-compose up -d --build\e[0m"
cd ~/bpkb-deployment/dev/bpkb-application-host && sudo docker-compose down && sudo docker-compose up -d --build
cd ~