public class ReverseArray {
    public int[] reverseArrray(int []a){
       for(int i=0;i<a.length;i++){
        for(int j=i+1;j<a.length;j++){
            int temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }

       }
       return a;
    }
    public static void main(String[] args) {
        ReverseArray reverseArray=new ReverseArray();
        int[]i={1,2,3,4,5};
        int j[]=reverseArray.reverseArrray(i);
        for(int x:j){
            System.out.print(x+" f");
        }

    }
}
