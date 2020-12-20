MASTER_USER=root
MASTER_PWD=8YU3P9ReKr5wqGw

NODE1_HOST=64.225.14.250
NODE2_HOST=104.236.14.189
NODE3_HOST=104.236.14.188
NODE4_HOST=157.245.117.157

deployone:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'rm -fr /$(MASTER_USER)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'mkdir /$(MASTER_USER)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(NODE1_HOST):/$(MASTER_USER)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'echo `killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'cd /$(MASTER_USER)/blockumulus/cell && npm install body-parser'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'cd /$(MASTER_USER)/blockumulus/cell && npm install express'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'cd /$(MASTER_USER)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'cd /$(MASTER_USER)/blockumulus/api && npm install node-rest-client'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'cd /$(MASTER_USER)/blockumulus/cell && nohup node main > ~/blockumulus.log' &

deploytwo:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'rm -fr /$(MASTER_USER)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'mkdir /$(MASTER_USER)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(NODE2_HOST):/$(MASTER_USER)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'echo `killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'cd /$(MASTER_USER)/blockumulus/cell && npm install body-parser'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'cd /$(MASTER_USER)/blockumulus/cell && npm install express'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'cd /$(MASTER_USER)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'cd /$(MASTER_USER)/blockumulus/api && npm install node-rest-client'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'cd /$(MASTER_USER)/blockumulus/cell && nohup node main > ~/blockumulus.log' &

deploythree:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'rm -fr /$(MASTER_USER)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'mkdir /$(MASTER_USER)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(NODE3_HOST):/$(MASTER_USER)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'echo `killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'cd /$(MASTER_USER)/blockumulus/cell && npm install body-parser'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'cd /$(MASTER_USER)/blockumulus/cell && npm install express'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'cd /$(MASTER_USER)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'cd /$(MASTER_USER)/blockumulus/api && npm install node-rest-client'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'cd /$(MASTER_USER)/blockumulus/cell && nohup node main > ~/blockumulus.log' &

deployfour:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'rm -fr /$(MASTER_USER)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'mkdir /$(MASTER_USER)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(NODE4_HOST):/$(MASTER_USER)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'echo `killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'cd /$(MASTER_USER)/blockumulus/cell && npm install body-parser'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'cd /$(MASTER_USER)/blockumulus/cell && npm install express'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'cd /$(MASTER_USER)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'cd /$(MASTER_USER)/blockumulus/api && npm install node-rest-client'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'cd /$(MASTER_USER)/blockumulus/cell && nohup node main > ~/blockumulus.log' &

deploy: deployone deploytwo deploythree deployfour