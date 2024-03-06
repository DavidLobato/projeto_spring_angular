package br.com.projeto.springboot.angular.api.model;

class MnopA {
    static int x=10,y=10,z=10;
    public MnopA() {
    x*=2;
    }
    {
    y+=5;
    z+=10;
    }
   }
   class MnopB extends MnopA {
    public MnopB(int c) {
    y*=c;
    }
    {
    z+=y;
    }
    static {
    x=y=z=1;
    }
   }
   public class teste {
    public static void main(String[] args) {
    MnopB o=new MnopB(2);
    System.out.println(MnopB.x+MnopB.y+MnopB.z);
   
    }
   }

   //https://www.youtube.com/watch?v=B0uG9b0x4g0&list=PLWXw8Gu52TRLR24HGjSiVrE5MrkU5tWX-&index=12