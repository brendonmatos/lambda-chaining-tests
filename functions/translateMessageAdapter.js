module.exports.handler = async (event) => { 

    console.log( 'Receiving in message adapter', event )

    const { message } = event

    event.translateInput = {
        content: message,
        settings: {
            from: 'english',
            to: 'portuguese'
        }
    }

    return event
}