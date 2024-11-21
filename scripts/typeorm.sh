#!/bin/bash

# 确保参数不为空
if [ -z "$1" ]; then
  echo "Usage: $0 <typeorm-command> [args...]"
  echo "Example: $0 migration:generate -n MigrationInit"
  exit 1
fi

# 设置环境变量并运行 TypeORM CLI，传递所有参数
cross-env NODE_ENV=development ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js "$@" -d ./src/data-source.ts -p src/migrations
