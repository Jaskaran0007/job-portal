import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserDAO {
    private Connection connection;

    public UserDAO() {
        try {
            connection = DBConnection.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<User> getAllUsers() throws SQLException {
        List<User> users = new ArrayList<>();
        String sql = "SELECT user_id, username, email, role FROM users";

        try (Statement stmt = connection.createStatement(); ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                User user = new User(
                    rs.getInt("user_id"), 
                    rs.getString("username"), 
                    rs.getString("email"), 
                    rs.getString("role")
                );
                users.add(user);
            }
        }
        return users;
    }

    public void addUser (User user) throws SQLException {
        String sql = "INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)";
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setString(1, user.getUsername());
            pstmt.setString(2, user.getPassword());
            pstmt.setString(3, user.getEmail());
            pstmt.setString(4, user.getRole());
            pstmt.executeUpdate();
        }
    }

    public boolean authenticate(String username, String password) throws SQLException {
        String sql = "SELECT * FROM users WHERE username = ? AND password = SHA2(?, 256)";
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setString(1, username);
            pstmt.setString(2, password);
            ResultSet rs = pstmt.executeQuery();
            return rs.next();
        }
    }
}