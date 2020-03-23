class RedeNeural {
    
    constructor(i_nodes, h_nodes, o_nodes) {
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        this.inputHidden = new Neuronios(this.i_nodes, this.h_nodes);
        this.hiddenOutput = new Neuronios(this.h_nodes, this.o_nodes);

        this.learning_rate = 0.1;
    }

    train(arr,target) {

        // FEEDFORWARD

        // INPUT -> HIDDEN
        let input = Matrix.arrayToMatrix(arr);
        let hidden = this.inputHidden.feedforward(input);

        // HIDDEN -> OUTPUT
        let output = this.hiddenOutput.feedforward(hidden);

        // BACKPROPAGATION
        
        // OUTPUT -> HIDDEN
        let expected = Matrix.arrayToMatrix(target);
        let output_error = Matrix.subtract(expected,output);
        
        this.hiddenOutput.backPropagation(output, hidden, output_error);

        // HIDDEN -> INPUT
        let weigths_ho_T = Matrix.transpose(this.hiddenOutput.weigths);        
        let hidden_error = Matrix.multiply(weigths_ho_T,output_error);

        this.inputHidden.backPropagation(hidden, input, hidden_error);
    }

    predict(arr){
        // INPUT -> HIDDEN
        let input = Matrix.arrayToMatrix(arr);
        let hidden = this.inputHidden.feedforward(input);

        // HIDDEN -> OUTPUT
        let output = this.hiddenOutput.feedforward(hidden);
        output = Matrix.MatrixToArray(output);

        return output;
    }
}