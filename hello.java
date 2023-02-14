public class hello{
      public String isPrimeNumber(int number){
          for(int i=2;i<number;i++){
            if(number%i==0){
                return number+" is not a prime number";
                
            }
          }
          return number+" is a prime number";
      }
      public static void main(String[] args) {
        hello obj=new hello();
        System.out.println(obj.isPrimeNumber(97));
      }
    }
