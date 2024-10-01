var bicycle = {
    'frameMaterial':'aluminium',
    'frameSize':'M',
    'wheelSize':'27.5"',
    'cassette':'12s',
    'fork':'120mm',
    getInfo() {
        for (const key in this) {
            if (key !== 'getInfo') {
                console.log(key, ':', this[key]);
            }
        }
    },
};

bicycle.getInfo();
bicycle.brand = 'Trek';
bicycle.getInfo();