#!/bin/bash

wget https://bitbucket.org/MatchboxDorry/dorry-installation/get/feature/release-script.tar.gz
mkdir /opt/dorry-installation
tar -xvzf release-script.tar.gz -C /opt/dorry-installation
python3 /opt/dorry-installation/MatchboxDorry-dorry-installation-*/uninstall_kubernetes.py
python3 /opt/dorry-installation/MatchboxDorry-dorry-installation-*/uninstall_platform.py
