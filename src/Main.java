import java.sql.SQLException;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        UserDAO userDAO = new UserDAO();
        
        try {
            User newUser1 = new User(0, "prabhat_munjal", "prabhat.munjal@email.com");
            newUser1.setPassword("prabhat123");
            userDAO.addUser(newUser1);
            
            User newUser2 = new User(0, "jaskaran_singh", "jaskaran.singh@email.com");
            newUser2.setPassword("jaskaran456");
            userDAO.addUser(newUser2);
            
            User newUser3 = new User(0, "himanshu_malviya", "himanshu.malviya@email.com");
            newUser3.setPassword("himanshu789");
            userDAO.addUser(newUser3);
            
            User newUser4 = new User(0, "angad_singh_yadav", "angad.singh.yadav@email.com");
            newUser4.setPassword("angad101");
            userDAO.addUser(newUser4);
            
            List<User> users = userDAO.getAllUsers();
            for (User user : users) {
                System.out.println("User ID: " + user.getUserId() + ", Username: " + user.getUsername() + ", Email: " + user.getEmail());
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
