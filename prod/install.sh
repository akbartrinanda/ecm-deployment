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

echo -e "\e[1;32m mkdir ~/ecm-file-uploads \e[0m"
mkdir ~/ecm-file-uploads

echo -e "\e[1;32m mkdir ~/lib-ecm \e[0m"
mkdir ~/ecm-libs

echo -e "\e[1;32m cd ~/lib-ecm \e[0m"
cd ~/ecm-libs

mkdir train_data
cd train_data
wget https://paddleocr.bj.bcebos.com/ppstructure/dataset/XFUND.tar && tar -xf XFUND.tar
cd ..

mkdir pretrained_model
cd pretrained_model
wget https://paddleocr.bj.bcebos.com/ppstructure/models/vi_layoutxlm/ser_vi_layoutxlm_xfund_pretrained.tar && tar -xf ser_vi_layoutxlm_xfund_pretrained.tar
wget https://paddleocr.bj.bcebos.com/ppstructure/models/vi_layoutxlm/re_vi_layoutxlm_xfund_pretrained.tar && tar -xf re_vi_layoutxlm_xfund_pretrained.tar
cd ..

mkdir inference
cd inference
wget https://paddleocr.bj.bcebos.com/ppstructure/models/vi_layoutxlm/ser_vi_layoutxlm_xfund_infer.tar && tar -xf ser_vi_layoutxlm_xfund_infer.tar
wget https://paddleocr.bj.bcebos.com/ppstructure/models/vi_layoutxlm/re_vi_layoutxlm_xfund_infer.tar && tar -xf re_vi_layoutxlm_xfund_infer.tar
cd ..

echo -e "\e[1;32m ~/ecm-deployment/prod \e[0m"
cd ~/ecm-deployment/prod

echo -e "\e[1;32m sudo docker-compose up -d \e[0m"
sudo docker-compose up -d
