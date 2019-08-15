module.exports.handler = async (event) => { 

    console.log( 'receiving in translate', event )

    const { content, settings: { from, to } } = event

    if( content === 'Hello world' ) {
        return {
            content: 'Olá Mundo'
        }
    }

    return {
        content: 'Not found'
    }

}