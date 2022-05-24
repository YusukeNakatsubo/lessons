import java.util.*;


public class Main {
    public static void main(String[] args) {
        // 自分の得意な言語で
        // Let's チャレンジ！！
        Scanner sc = new Scanner(System.in);
		int H = Integer.parseInt(sc.next());
		int W = Integer.parseInt(sc.next());
		char[][] map = new char[H][W];
		for (int i = 0; i < H; i++) {
			map[i] = sc.next().toCharArray();
		}

		int s_y = Integer.parseInt(sc.next()) - 1;
		int s_x = Integer.parseInt(sc.next()) - 1;
		int N = Integer.parseInt(sc.next());
		char[] direction = new char[N];
		
		// 初期位置
		String getDir = "";
		for (int i = 0; i < N; i++) {
			getDir += sc.next();
		}
		direction = getDir.toCharArray();
		
// 		System.out.println(getDir);
		System.out.println(direction);

		boolean check = true;
		for (int i = 0; i < N; i++) {
			if (direction[i] == 'U') {
				while (check) {
					if ((s_x - 1) >= 0) {
						if (map[s_x - 1][s_y] == '.') {
							s_x--;
							break;
						} else if (map[s_x - 1][s_y] == '#') {
							s_x--;
						}
					} else {
						break;
					}
				}
			} else if (direction[i] == 'D') {
				while (check) {
					if ((s_x + 1) < H) {
						if (map[s_x + 1][s_y] == '.') {
							s_x++;
							break;
						} else if (map[s_x + 1][s_y] == '#') {
							s_x++;
						}
					} else {
						break;
					}
				}
			} else if (direction[i] == 'L') {
				while (check) {
					if ((s_y - 1) >= 0) {
						if (map[s_x][s_y - 1] == '.') {
							s_y--;
							break;
						} else if (map[s_x][s_y - 1] == '#') {
							s_y--;
						}
					} else {
						break;
					}
				}
			} else if (direction[i] == 'R') {
				while (check) {
					if ((s_y + 1) < W) {
						if (map[s_x][s_y + 1] == '.') {
							s_y++;
							break;
						} else if (map[s_x][s_y + 1] == '#') {
							s_y++;
						}
					} else {
						break;
					}
				}
			}
		}
		s_x++;
		s_y++;

		System.out.println(s_y + " " + s_x);
    }
}