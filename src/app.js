import { MemoryDB, addKeyword, createBot, createFlow, createProvider } from "@bot-whatsapp/bot";
import { BaileysProvider, handleCtx } from "@bot-whatsapp/provider-baileys";
 

const flowBienvenida = addKeyword('hola').addAnswer('Buenas bienvenido')
const main = async () => {
    const provider = createProvider(BaileysProvider)
    provider.initHttpServer(3003)

    provider.http?.server.post('/send-message', handleCtx(async (bot, req, res) => {
        const body = req.body
        const message = body.message
        const mediaUrl = body.mediaUrl    
        const phone = body.phone

        await bot.sendMessage(phone, message, {})

        await bot.sendMessage(phone, "", {
            media: mediaUrl
        })
        
        res.end('Respuesta desde la API de whatsapp')
    }))

    await createBot({
        flow: createFlow([]),
        database: new MemoryDB(),
        provider
    })
}

main()