public class SecondLargestNumber {
    public int[] secondLargestNumber(int []a){
        for(int i=0;i<a.length;i++){
            for(int j=i+1;j<a.length;j++){
                if(a[i]<a[j]){
                    int temp=a[i];
                     a[i]=a[j];
                     a[j]=temp;
                }
            }
        }
        return a;
    }
    public static void main(String[] args) {
        SecondLargestNumber obj=new SecondLargestNumber();
        int a[]={0,-12,-15,80,20,65};
         int[]result=obj.secondLargestNumber(a);
         for(int i:result){
            System.out.print(i+" ");
         }
         System.out.println();
         System.out.println("second largest number in an given array is "+result[1]);
    }

    
}