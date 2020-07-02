window.analytics = {
    page: (...args) => {
        console.log('* PAGE:>', JSON.stringify(args, null, 2));
    },
    track: (...args) => {
        console.log('* TRACK:>', JSON.stringify(args, null, 2));
    }
}
