function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function dsigmoid(x){
    return x * (1-x); 
}

class Neuronios {
    
    constructor(nod_in, node_out) {
        
        this.nod_in = nod_in;
        this.node_out = node_out;

        this.bias = new Matrix(this.node_out, 1);
        this.bias.randomize();

        this.weigths = new Matrix(this.node_out, this.nod_in);
        this.weigths.randomize();
        
        this.learning_rate = 0.1;
    }

    feedforward(arg) {
        
        //if(arg.constructor.name == 'Array') arg = Matrix.arrayToMatrix(arg);
        let result = Matrix.multiply(this.weigths, arg);
        result = Matrix.add(result, this.bias);

        return result.map(sigmoid);
    }

    backPropagation(out_data, in_data, out_data_error) {
        
        let d_out_data = Matrix.map(out_data,dsigmoid);
        let in_data_T = Matrix.transpose(in_data);

        let gradient = Matrix.hadamard(d_out_data,out_data_error);
        gradient = Matrix.escalar_multiply(gradient, this.learning_rate);

        // Adjust Bias
        this.bias = Matrix.add(this.bias, gradient);
        // Adjust Weigths
        let weigths_deltas = Matrix.multiply(gradient, in_data_T);
        this.weigths = Matrix.add(this.weigths, weigths_deltas);
    }
}