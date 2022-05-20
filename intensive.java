import java.util.*;

class abc {
    public static void main(String args[]) {
        try (Scanner obj = new Scanner(System.in)) {
            System.out.println("Enter a number");
            int a = obj.nextInt();
            for (int i = 0; i <= 10; i++) {
                a++;
                System.out.println(a);
            }
        }
    }
}
