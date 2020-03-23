var train = true;

function setup() {
    createCanvas(500, 500);
    background(0);

    nn = new RedeNeural(2, 3, 1);
    //n = new RedeNeural(2, 3, 1);

    // XOR Problem
    dataset = {
        inputs:
            [[1, 1],
            [1, 0],
            [0, 1],
            [0, 0]],
        outputs:
            [[0],
            [1],
            [1],
            [0]]
    }

    //nn.train(dataset.inputs[0], dataset.outputs[0]);
    

    // A = [[1,2],[3,4]];
    // B = [[2,3],[4,5]];
    // console.log('A isMatrix', A.constructor.name);

    
    // A = Matrix.arrayOfArraysToMatrix(A);
    // B = Matrix.arrayOfArraysToMatrix(B);

    // console.log('A', A.rows, A.cols);
    // C = Matrix.multiply(A,B);
    // console.log('C isMatrix', C.constructor.name);

    
    // console.table(A);
    // console.table(B);
    // console.table(C);

    // D = [[10, 13],[22,29]];
    // console.table(D);
}

function draw() {
    if (train) {
        for (var i = 0; i < 10000; i++) {
            var index = floor(random(4));
            nn.train(dataset.inputs[index], dataset.outputs[index]);
        }
        if (nn.predict([0, 0])[0] < 0.04 && nn.predict([1, 0])[0] > 0.98) {
            train = false;
            console.log("terminou");
            console.log("0: ", nn.predict([0, 0]), nn.predict([0, 0]) > 0.90);
            console.log("1: ", nn.predict([1, 0]), nn.predict([1, 0]) > 0.90);
            console.log("0: ", nn.predict([1, 1]), nn.predict([1, 1]) > 0.90);
            console.log("1: ", nn.predict([0, 1]), nn.predict([0, 1]) > 0.90);
        }
    }
}
