import dotenv from 'dotenv'

dotenv.config()
export const config = {
  secrets: {
    jwt: 'learneverything'
  },
  dbUrl:
    process.env.CONNECTIONSTRING ||
    'mongodb://localhost:27017/vaillant-batisseur', // 'mongodb://DESKTOP-7F87LGU:27017,DESKTOP-7F87LGU:27018,DESKTOP-7F87LGU:27019/vaillant-batisseur?replicaSet=rs'
}
