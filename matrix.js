class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;

        this.data = Array(rows).fill().map(() => Array(cols).fill(0));
    }

    // Funções Diversas    

    static arrayToMatrix(arr) {
        let matrix = new Matrix(arr.length, 1);
        matrix.map((elm, i, j) =>  arr[i])
        return matrix;
    }   

    static arrayOfArraysToMatrix(arr) {
        let matrix = new Matrix(arr.length, arr[0].length);
        matrix.map((elm, i, j) =>  arr[i][j])
        return matrix;
    }

    static MatrixToArray(obj) {
        let arr = []
        obj.map((elm, i, j) => arr.push(elm))
        return arr;
    }


    print() {
        console.table(this.data);
    }
    
    printData(data) {
        console.table(data);
    }

    randomize() {
        this.map((elm, i, j) => Math.random() * 2 - 1);
    }

    static map(A, func) {
        let matrix = new Matrix(A.rows, A.cols);
        matrix.data = A.data.map((arr, i) => arr.map((num, j) => func(num, i, j)))
        return matrix;
    }

    map(func) {
        this.data = this.data.map((arr, i) => arr.map((num, j) => func(num, i, j)))
        return this;
    }

    static transpose(A){
        var matrix = new Matrix(A.cols, A.rows);
        matrix.map((num,i,j) => A.data[j][i]);
        return matrix;
    }

    // Operações Estáticas Matriz x Escalar 
    
    static escalar_multiply(A, escalar) {
        var matrix = new Matrix(A.rows, A.cols);
        matrix.map((num, i, j) => A.data[i][j] * escalar);
        return matrix;
    }
    
    // Operações Estáticas Matriz x Matriz

    static hadamard(A, B) {
        var matrix = new Matrix(A.rows, A.cols);
        matrix.map((num, i, j) => A.data[i][j] * B.data[i][j]);
        return matrix;
    }

    static add(A, B) {
        var matrix = new Matrix(A.rows, A.cols);
        matrix.map((num, i, j) => A.data[i][j] + B.data[i][j]);
        return matrix;
    }

    static subtract(A, B) {
        var matrix = new Matrix(A.rows, A.cols);
        matrix.map((num, i, j) => A.data[i][j] - B.data[i][j]);
        return matrix;
    }

    static multiply(A, B) {
        var matrix = new Matrix(A.rows, B.cols);

        matrix.map((num, i, j) => {
            let sum = 0
            for (let k = 0; k < A.cols; k++) {
                let elm1 = A.data[i][k];
                let elm2 = B.data[k][j];
                sum += elm1 * elm2;
            }
            
            return sum;
        })

        return matrix;
    }
}