const available = () => !!window.showSaveFilePicker;

const showSaveFilePicker = fileName => window.showSaveFilePicker({
    suggestedName: fileName,
    types: [
        {
            description: 'OnyxMod Project',
            accept: {
                'application/x.scratch.sb3': '.omp'
            }
        },
        {
            description: 'PenguinMod Project',
            accept: {
                'application/x.scratch.sb3': '.pmp'
            }
        }
    ],
    excludeAcceptAllOption: true
});

const showOpenFilePicker = async () => {
    const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
            {
                description: 'OnyxMod Project',
                accept: {
                    'application/x.scratch.sb3': ['.omp']
                }
            },
            {
                description: 'ElectraMod Project',
                accept: {
                    'application/x.scratch.sb3': ['.electra']
                }
            },
            {
                description: 'Snail IDE Project',
                accept: {
                    'application/x.scratch.sb3': ['.snail']
                }
            },
            {
                description: 'PenguinMod Project',
                accept: {
                    'application/x.scratch.sb3': ['.pmp', '.pm']
                }
            },
            {
                description: 'Scratch Project',
                accept: {
                    'application/x.scratch.sb3': ['.sb3', '.sb2', '.sb']
                }
            }
        ]
    });
    return handle;
};

export default {
    available,
    showOpenFilePicker,
    showSaveFilePicker
};