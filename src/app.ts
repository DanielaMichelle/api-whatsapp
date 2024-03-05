import { MemoryDB, addKeyword, createBot, createFlow, createProvider } from "@bot-whatsapp/bot";
import { BaileysProvider, handleCtx } from "@bot-whatsapp/provider-baileys";
 

const flowBienvenida = addKeyword('hola').addAnswer('Buenas bienvenido')
const main = async () => {
    const provider = createProvider(BaileysProvider)
    provider.initHttpServer(3001)

    provider.http?.server.post('/send-message', handleCtx(async (bot, req, res) => {
        const body = req.body
        const message = body.message
        const mediaUrl = body.mediaUrl    

        await bot.sendMessage('51999355516', message, {})

        await bot.sendMessage('51999355516', "", {
            media: mediaUrl
        })
        
        res.end('esto es del server de polka')
    }))

    await createBot({
        flow: createFlow([]),
        database: new MemoryDB(),
        provider
    })
}

main()