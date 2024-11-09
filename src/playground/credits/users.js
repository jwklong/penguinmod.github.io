const shuffle = list => {
    for (let i = list.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        const tmp = list[i];
        list[i] = list[random];
        list[random] = tmp;
    }
    return list;
};

const fromHardcoded = ({ userId, username, name }) => ({
    image: `https://trampoline.turbowarp.org/avatars/${userId}`,
    href: `https://scratch.mit.edu/users/${username}/`,
    text: name || username
});

const fromHardcodedGithub = username => ({
    image: `https://github.com/${username}.png`,
    href: `https://github.com/${username}/`,
    text: username
});
const fromHardcodedNamed = username => ({
    image: `https://localhost:5173/unknown_user.png`,
    href: "https://jwklong.github.io/penguinmod.github.io/credits.html#",
    text: username
});

const fromHardcodedDiscord = async userId => {
    const res = await fetch(`https://pmupdatereader.jeremygamer13.repl.co/user/${userId}`);
    const json = await res.json();
    return {
        image: json.avatarURL,
        text: json.username
    };
};

const addonDevelopers = [
    {
        userId: '34018398',
        username: 'Jeffalo'
    },
    {
        userId: '64184234',
        username: 'ErrorGamer2000'
    },
    {
        userId: '41616512',
        username: 'pufferfish101007'
    },
    {
        userId: '61409215',
        username: 'TheColaber'
    },
    {
        userId: '1882674',
        username: 'griffpatch'
    },
    {
        userId: '10817178',
        username: 'apple502j'
    },
    {
        userId: '16947341',
        username: '--Explosion--'
    },
    {
        userId: '14880401',
        username: 'Sheep_maker'
    },
    {
        userId: '9981676',
        username: 'NitroCipher'
    },
    {
        userId: '2561680',
        username: 'lisa_wolfgang'
    },
    {
        userId: '60000111',
        username: 'GDUcrash'
    },
    {
        userId: '4648559',
        username: 'World_Languages'
    },
    {
        userId: '17340565',
        username: 'GarboMuffin'
    },
    {
        userId: '5354974',
        username: 'Chrome_Cat'
    },
    {
        // actual ID is 34455896 but their avatar is the wrong resolution and looks really weird
        userId: '0',
        username: 'summerscar'
    },
    {
        userId: '55742784',
        username: 'RedGuy7'
    },
    {
        userId: '9636514',
        username: 'Tacodiva7729'
    },
    {
        userId: '14792872',
        username: '_nix'
    },
    {
        userId: '30323614',
        username: 'BarelySmooth'
    },
    {
        userId: '64691048',
        username: 'CST1229'
    },
    {
        userId: '12498592',
        username: 'LilyMakesThings'
    }
].map(fromHardcoded);

const pmDevelopers = [
    'enderhacker',
    'FreshPenguin112',
    'Ianyourgod',
    'JoshAtticus',
    'JeremyGamer13',
    'jwklong',
    'tnix100',
    'RedMan13',
    'SharkPool-SP',
    'showierdata9978'
].map(fromHardcodedGithub);

const pmPullRequestDevelopers = [ // these people made a PR that got merged, or got a dev to add something they made
    'NexusKitten',
    'LilyMakesThings',
    'MikeDev101',
    'kokofixcomputers',
    'PPPDUD',
    'qbjl',
    'minidogg',
    'concertalyis',
    'Steve0Greatness',
    'ilikecoding-197',
    'NotEmbin',
    'NotCryptid' // rx or ry single fix
    // list could be missing some people, but theres not really a way to tell
].map(fromHardcodedGithub);

const pmApiDevelopers = [
    'JeremyGamer13',
    'RedMan13',
    'tnix100',
    'Ianyourgod',
    'JoshAtticus',
    'enderhacker'
].map(fromHardcodedGithub);

// todo: should translators be only named or...?
const pmTranslators = [
    {
        text: 'kolikiscool',
        image: `https://localhost:5173/unknown_user.png`,
        href: "https://jwklong.github.io/penguinmod.github.io/credits.html#",
    },
    {
        text: 'n0name',
        image: `https://localhost:5173/unknown_user.png`,
        href: "https://jwklong.github.io/penguinmod.github.io/credits.html#",
    },
    {
        text: 'a_pc',
        image: `https://localhost:5173/unknown_user.png`,
        href: "https://jwklong.github.io/penguinmod.github.io/credits.html#",
    },
    {
        text: 'onetoanother',
        image: `https://trampoline.turbowarp.org/avatars/by-username/onetoanother`,
        href: "https://localhost:5173/profile?user=onetoanother",
    },
    {
        text: 'NamelessCat',
        image: `https://trampoline.turbowarp.org/avatars/by-username/NamelessCat`,
        href: "https://localhost:5173/profile?user=NamelessCat",
    },
    {
        text: 'Just-Noone',
        image: `https://trampoline.turbowarp.org/avatars/by-username/Just-Noone`,
        href: "https://localhost:5173/profile?user=Just-Noone",
    },
    {
        text: 'goose_but_smart',
        image: `https://trampoline.turbowarp.org/avatars/by-username/goose_but_smart`,
        href: "https://localhost:5173/profile?user=goose_but_smart",
    },
    {
        text: 'Le_Blob77',
        image: `https://trampoline.turbowarp.org/avatars/by-username/Le_Blob77`,
        href: "https://localhost:5173/profile?user=Le_Blob77",
    },
    {
        text: 'MrRedstonia',
        image: `https://trampoline.turbowarp.org/avatars/by-username/MrRedstonia`,
        href: "https://localhost:5173/profile?user=MrRedstonia",
    },
    {
        text: 'TheShovel',
        image: `https://trampoline.turbowarp.org/avatars/by-username/TheShovel`,
        href: "https://localhost:5173/profile?user=TheShovel",
    },
    {
        text: 'SmolBoi37',
        image: `https://localhost:5173/unknown_user.png`,
        href: "https://jwklong.github.io/penguinmod.github.io/credits.html#",
    },
    {
        text: 'GigantTech',
        image: `https://trampoline.turbowarp.org/avatars/by-username/GigantTech`,
        href: "https://localhost:5173/profile?user=GigantTech",
    },
    {
        text: 'hacker_anonimo',
        image: `https://trampoline.turbowarp.org/avatars/by-username/hacker_anonimo`,
        href: "https://localhost:5173/profile?user=hacker_anonimo",
    },
    {
        text: 'zaaxd52',
        image: `https://trampoline.turbowarp.org/avatars/by-username/zaaxd52`,
        href: "https://localhost:5173/profile?user=zaaxd52",
    },
    {
        text: 'G1nX',
        image: `https://trampoline.turbowarp.org/avatars/by-username/G1nX`,
        href: "https://localhost:5173/profile?user=G1nX",
    },
    {
        text: 'FNFFortune',
        image: `https://trampoline.turbowarp.org/avatars/by-username/FNFFortune`,
        href: "https://localhost:5173/profile?user=FNFFortune",
    },
    // has since left the server
    // possibly they have a new account, so replace the name & url if so
    {
        text: 'Gabberythethughunte',
        image: `https://localhost:5173/unknown_user.png`,
        href: "https://localhost:5173/profile?user=Gabberythethughunte",
    },
    {
        text: 'keriyo',
        image: `https://trampoline.turbowarp.org/avatars/by-username/keriyo`,
        href: "https://localhost:5173/profile?user=keriyo",
    },
    {
        text: 'DenPlayTS',
        image: `https://trampoline.turbowarp.org/avatars/by-username/DenPlayTS`,
        href: "https://localhost:5173/profile?user=DenPlayTS",
    },
    {
        text: 'Tsalbre',
        image: `https://trampoline.turbowarp.org/avatars/by-username/Tsalbre`,
        href: "https://localhost:5173/profile?user=Tsalbre",
    },
    {
        text: 'MubiLop',
        image: `https://trampoline.turbowarp.org/avatars/by-username/MubiLop`,
        href: "https://localhost:5173/profile?user=MubiLop",
    },
    {
        text: 'TLP136',
        image: `https://trampoline.turbowarp.org/avatars/by-username/TLP136`,
        href: "https://localhost:5173/profile?user=TLP136",
    },
    {
        text: 'Cymock',
        image: `https://trampoline.turbowarp.org/avatars/by-username/Cymock`,
        href: "https://localhost:5173/profile?user=Cymock",
    },
    {
        text: 'ItzzEndr',
        image: `https://trampoline.turbowarp.org/avatars/by-username/ItzzEndr`,
        href: "https://localhost:5173/profile?user=ItzzEndr",
    },
    {
        text: 'Capysussa',
        image: `https://trampoline.turbowarp.org/avatars/by-username/Capysussa`,
        href: "https://localhost:5173/profile?user=Capysussa",
    },
    // con-zie is now banned from PenguinMod
    {
        text: 'con-zie',
        image: `https://localhost:5173/unknown_user.png`,
        href: "https://jwklong.github.io/penguinmod.github.io/credits.html#",
    },
    {
        text: 'ImNotScratchY_lolol',
        image: `https://trampoline.turbowarp.org/avatars/by-username/ImNotScratchY_lolol`,
        href: "https://localhost:5173/profile?user=ImNotScratchY_lolol",
    },
    {
        text: 'justablock',
        image: `https://trampoline.turbowarp.org/avatars/by-username/justablock`,
        href: "https://localhost:5173/profile?user=justablock",
    },
    {
        text: 'inventionpro',
        image: `https://trampoline.turbowarp.org/avatars/by-username/inventionpro`,
        href: "https://localhost:5173/profile?user=inventionpro",
    },
    {
        text: 'SkyBuilder1717',
        image: `https://trampoline.turbowarp.org/avatars/by-username/SkyBuilder1717`,
        href: "https://localhost:5173/profile?user=SkyBuilder1717",
    },
    {
        text: 'Parham1258',
        image: `https://avatars.githubusercontent.com/u/95162943?v=4`,
        href: "https://github.com/Parham1258",
    },
    {
        text: 'lem0n0fficial',
        image: `https://trampoline.turbowarp.org/avatars/by-username/lem0n0fficial`,
        href: "https://localhost:5173/profile?user=lem0n0fficial",
    },
    {
        text: 'Oldcoinmania',
        image: `https://trampoline.turbowarp.org/avatars/by-username/Oldcoinmania`,
        href: "https://localhost:5173/profile?user=Oldcoinmania",
    },
    {
        text: 'mariocraft987',
        image: `https://avatars.githubusercontent.com/u/154646419?v=4`,
        href: "https://github.com/mariocraft987",
    },
];

const logoArtists = Promise.all([
    '593554048188416001'
].map(fromHardcodedDiscord));

const extensionDevelopers = [
    'GarboMuffin',
    'griffpatch',
    'DT-is-not-available',
    'Xeltalliv',
    'MikeDev101',
    'LilyMakesThings'
].map(fromHardcodedGithub);
const pmExtensionDevelopers = [
    'qbjl',
    'NexusKitten',
    'Gen1x-ALT',
    'SharkPool-SP',
    'DogeisCut', // listed as a collaborator on a SharkPool extension
    'David-Orangemoon',
    'pooiod',
    'WAYLIVES',
    'MrRedstonia',
    'MikeDev101',
    'BopShoes',
    'AlexSchoolOH',
    'Monochromasity',
    'LilyMakesThings',
    'TheShovel',
    'skyhigh173',
    'Ruby-Devs',
    'oc9x97',
    'lego7set',
    'mariocraft987',
    'Ashimee'
].map(fromHardcodedGithub);

export default {
    addonDevelopers: shuffle(addonDevelopers),
    pmDevelopers: shuffle(pmDevelopers),
    logoArtists: shuffle(logoArtists),
    extensionDevelopers: shuffle(extensionDevelopers),
    pmExtensionDevelopers: shuffle(pmExtensionDevelopers),
    pmApiDevelopers: shuffle(pmApiDevelopers),
    pmTranslators: shuffle(pmTranslators),
    pmPullRequestDevelopers: shuffle(pmPullRequestDevelopers)
};
