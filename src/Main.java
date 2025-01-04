import java.sql.SQLException;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        UserDAO userDAO = new UserDAO();

        try {
            List<User> users = userDAO.getAllUsers();
            for (User  user : users) {
                System.out.println("User  ID: " + user.getUser Id() + ", Username: " + user.getUsername() + ", Email: " + user.getEmail() + ", Role: " + user.getRole());
            }

            // Test authentication
            if (userDAO.authenticate("jaskaran_singh", "jaskaran456")) {
                System.out.println("Authentication successful!");
            } else {
                System.out.println("Authentication failed!");
            }
        } catch (SQLException e) {
            System.err.println("SQL Error: " + e.getMessage());
        }
    }
}