#Building docker image
#Where all the commands are held that docker runs to contain my own personalised image
#Basically a tweaked base image, in this case the node.js base image from docker hub

FROM node:15

#set working directory, where commands are run from (e.g 'node index.js' command would run from app.js or whatever entry point is set here rather than index.js)
WORKDIR /app 

#Copy package.json into the current directory 
COPY package.json /app

#install project dependencies into container
RUN npm install

#Copy every single file from project into container
#this command will also copy package.json. but it is better performance wise when building the container to copy package.json first as above, because docker caches each step and when rebuilding the image in the future if nothing has changed in package.json then docker
#knows it can skip the next npm install step
COPY . ./
#Port to run on (this command actually doesnt do anything, it is more for documentation than anything)
EXPOSE 3000
#Run command for container
CMD ["node", "server.js"]


#-----------------Docker commands-------------
#docker build -t "image name" . <- build image with a given name '.' is path to current file
#docker image ls <- list all docker images 
#docker image rm 'docker image id' <- remove an image
#docker run -p 3000:3000 -d --name 'container name' docker-node-project-image <- run image (-p 3000:3000 = (traffic coming in from the outside(local host machine etc)), port to send traffic to on the container (container is listening to port 3000 as specified in server.js)) name of the container to be created, name of image to create a container from)
#so traffic on local host on port 3000 is forwarded to port 3000 on the docker container where the express app is listening
#docker run -v pathtofolderonlocalmachine:pathtofolderoncontainer -p 3000:3000 -d --name 'container name' docker-node-project-image (running ^ command like this allows syncing a folder on local machine to a folder in docker (so dont need to rebuild docker image everytime a change is made to a file) -v C:\Users\csbra\Documents\node-docker-project\:/app in this case)
#after this commmand^ changes made in project will reflect in docker - but still need to restart server (docker container) to see changes reflect
#docker ps <- list all containers
#docker rm 'container name' -f <- remove a container (-f allows removal whilst the container is still running)
#docker exec -it 'container name' bash <- enter interactive mode on docker
#cat app.js to see contents of app.js in docker container

