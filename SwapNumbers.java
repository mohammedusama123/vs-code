public class SwapNumbers {
    
        public void swapNumbers(int []a){
            for(int i=0;i<a.length-1;i++){
                int temp=a[i];
                a[i]=a[i+1];
                a[i+1]=temp;
            }
        }
            public static void main(String[]args){
            SwapNumbers swap=new SwapNumbers();
            int a[]={1,2};
            swap.swapNumbers(a);
            for(int i=0;i<a.length;i++){
                System.out.print(a[i]+" ");
            }
    }
    }

