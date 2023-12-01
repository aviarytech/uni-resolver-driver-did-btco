# Dockerfile for aviarytech/uni-resolver-driver-did-btco

FROM oven/bun:1

# build uni-resolver-driver-did-btco

WORKDIR /usr/src/app

COPY index.ts ./
COPY package.json ./
COPY bun.lockb ./

RUN bun install
RUN bun run build

# done

EXPOSE 8080

CMD [ "bun", "run", "start" ]
