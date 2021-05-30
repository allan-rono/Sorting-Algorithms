//input
const inputArray = document.getElementById("array-input");
var testArray = [5,4,7,3,9,2,8,1];
//Buttons
const btnSelection=document.getElementById("btn-selection");
const btnBubble = document.getElementById("btn-bubble");
const btnRecBubble = document.getElementById("btn-rec-bubble");
const btnInsertion = document.getElementById("btn-insertion");
const btnRecInsertion = document.getElementById("btn-rec-insertion");
const btnMerge = document.getElementById("btn-merge");
const btnIteMerge = document.getElementById("btn-ite-merge");
const btnQuick = document.getElementById("btn-quick");
const btnHeap = document.getElementById("btn-heap");

//Display
const pSelection = document.getElementById("p-selection");
const pBubble = document.getElementById("p-bubble"); 
const pRecBubble = document.getElementById("p-rec-bubble");
const pInsertion = document.getElementById("p-insertion");
const pRecInsertion = document.getElementById("p-rec-insertion");
const pMerge = document.getElementById("p-merge");
const pIteMerge = document.getElementById("p-ite-merge");
const pQuick = document.getElementById("p-quick");
const pHeap = document.getElementById("p-heap");

function selectionSort(){
    let nArray=testArray.length;
    let sortArray=testArray;
    let lowestPos = 0;

    for (var i=0;i<nArray;i++){
        for(var k=i+1;k<nArray-i;k++){
            if(sortArray[lowestPos]>sortArray[k+1]){
                lowestPos=k
            }else{
                lowestPos=k+1
            }
        }
        [sortArray[i],sortArray[lowestPos]=sortArray[lowestPos],sortArray[i]]
    }

    pSelection.innerHTML=sortArray;
};
function bubbleSort(){};
function recBubbleSort(){};
function insertionSort(){};
function recInsertionSort(){};
function mergeSort(){};
function iteMergeSort(){};
function quickSort(){};
function heapSort(){};

btnSelection.addEventListener("click",selectionSort);
btnBubble.addEventListener("click", bubbleSort);
btnRecBubble.addEventListener("click", recBubbleSort);
btnInsertion.addEventListener("click", insertionSort);
btnRecInsertion.addEventListener("click", recInsertionSort);
btnMerge.addEventListener("click", mergeSort);
btnIteMerge.addEventListener("click", iteMergeSort);
btnQuick.addEventListener("click", quickSort);
btnQuick.addEventListener("click", heapSort);