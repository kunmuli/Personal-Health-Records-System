# Patient-health-records-system

The main objective of this system is to provide patients with one-stop-shop access to their medical history across multiple providers. From here the patients are given full access and control of their medical records.

## Tech Stack used for the project
* IBM’s Hyperledger Framework for Blockchain
* Hyperledger Composer based on Fabric Architecture


# Instructions to run the API Backend
- Clone the repo `git clone https://github.com/kunmuli/Personal-Health-Records-System.git`
- CD into the cloned directory using `cd Personal-Health-Records-System`.
- First install [Hyperledger composer](https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html). Then install the [development environment](https://hyperledger.github.io/composer/latest/installing/development-tools.html).
- Execute the following commands to setup your Blockchain network and generate Hyperledger Composer Rest Server:
- `composer archive create -t dir -n .`
- `composer network install --card PeerAdmin@hlfv1 --archiveFile phrs@0.0.8.bna`
- `composer network start --networkName phrs --networkVersion 0.0.8 --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --file networkadmin.card`
- `composer card import --file networkadmin.card` 
- To check that the business network has been deployed successfully, run the following command to ping the network, `composer network ping --card admin@phrs`
- `composer-rest-server -c admin@phrs -n always -u true -d y -w true`
- Goto `http://localhost:3000/explorer` to explore the REST API

# Instructions to restart the server
- Change to the directory where the docker-compose.yml file is (`cd ~/fabric-dev-servers/fabric-scripts/hlfv12/composer`
- Run `docker-compose stop` to stop the Fabric Containers.
- Run `docker-compose start` to restart where you left off.
- Change to the cloned repo's directory (replace {WORKING-DIRECTORY} with the location you have cloned to): `cd {WORKING-DIRECTORY}/Personal-Health-Records-System`
- Run this command to start the server: `composer-rest-server -c admin@phrs -n always -u true -d y -w true`
- Goto `http://localhost:3000/explorer` to explore the REST API.

## License

This project is available under the Apache 2.0 license. See the [LICENSE](LICENSE) file for more info.