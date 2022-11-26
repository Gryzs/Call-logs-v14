
// INDEX
client.on('voiceStateUpdate', (oldState, newState) => {


    let channel = client.channels.cache.get("ID DO CANAL");

    let member = oldState.member

    //entrou
    if (!oldState.channel && newState.channel) {
        let entrou = new Discord.EmbedBuilder()

            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })

            .setThumbnail(member.user.displayAvatarURL({ dinamyc: true, size: 2048, format: 'png' }))

            .setTitle('Membro entrou no canal de voz!')

            .setDescription(`${member} Entrou no canal de voz ${newState.channel}!`)

            .setColor('Random')

            .setTimestamp()

        console.log(`${newState.id} entrou num canal de voz!`)

        channel.send({ embeds: [entrou] })

    }

    //moveu
    if (oldState.channel && newState.channel && oldState.channel !== newState.channel) {
        let moveu = new Discord.EmbedBuilder()

            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })

            .setThumbnail(member.user.displayAvatarURL({ dinamyc: true, size: 2048, format: 'png' }))

            .setTitle('Membro mudou de canal de voz')

            .setDescription(`${member} Saiu do canal ${oldState.channel} e se juntou ao canal ${newState.channel}!`)

            .setColor('Random')

            .setTimestamp()

        console.log(`Membro saiu de uma call e entrou em outra`)

        channel.send({ embeds: [moveu] })
    }

    //saiu
    if (oldState.channel && !newState.channel) {
        let saiu = new Discord.EmbedBuilder()

            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })

            .setThumbnail(member.user.displayAvatarURL({ dinamyc: true, size: 2048, format: 'png' }))

            .setTitle('Membro deixou o canal de voz')

            .setDescription(`${member} Saiu do canal de voz ${oldState.channel}!`)

            .setColor('Random')

            .setTimestamp()

        console.log(`${oldState.id} saiu do canal de voz`)

        channel.send({ embeds: [saiu] })

    }
})