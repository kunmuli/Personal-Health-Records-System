# patient-health-records

The main objective of this system is to provide patients with one-stop-shop access to their medical history across multiple providers. From here the patients are given full access and control of their medical records.

## Tech Stack used for the project
* IBM’s Hyperledger Framework for Blockchain
* Hyperledger Composer based on Fabric Architecture
* Hyperledger Playground for Blockchain
* JavaScript for website

# Instructions to run the API Backend
- Clone the repo `git clone https://github.com/Akshat-Jain/Electronic-Health-Record-System.git`
- CD into the cloned directory using `cd Electronic-Health-Record-System`.
- First install [Hyperledger composer](https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html). Then install the [development environment](https://hyperledger.github.io/composer/latest/installing/development-tools.html).
- Execute the following commands to setup your Blockchain network and generate Hyperledger Composer Rest Server:
- `composer archive create -t dir -n .`
- `composer network install --card PeerAdmin@hlfv1 --archiveFile ehr@0.0.3.bna`
- `composer network start --networkName ehr --networkVersion 0.0.3 --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --file networkadmin.card`
- `composer card import --file networkadmin.card` 
- `composer-rest-server -c admin@ehr -n always -u true -d y -w true`
- Goto `http://localhost:3000/explorer` to explore the REST API

# Instructions to restart the server
- Change to the directory where the docker-compose.yml file is (`cd /Users/AkJn/fabric-dev-servers/fabric-scripts/hlfv1/composer`
- Run `docker-compose stop` to stop the Fabric Containers.
- Run `docker-compose start` to restart where you left off.
- Change to the cloned repo's directory: `cd /Users/AkJn/Projects/Blockchain/Electronic-Health-Record-System`
- Run this command to start the server: `composer-rest-server -c admin@ehr -n always -u true -d y -w true`
- Goto `http://localhost:3000/explorer` to explore the REST API.

## License

This project is available under the MIT license. See the [LICENSE](LICENSE) file for more info.