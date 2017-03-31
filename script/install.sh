#!/bin/bash

apt install python3
apt install python3-pip
pip3 install pymongo
wget https://bitbucket.org/MatchboxDorry/dorry-installation/get/feature/release-script.tar.gz
mkdir /opt/dorry-installation
tar -xvzf release-script.tar.gz -C /opt/dorry-installation
python3 /opt/dorry-installation/MatchboxDorry-dorry-installation-*/install_kubernetes.py
python3 /opt/dorry-installation/MatchboxDorry-dorry-installation-*/install_platform.py
rm -r /opt/dorry-installation
