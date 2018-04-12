package space.qmen.lot;

/**
 * Created by Luo_0412 on 2017/5/1.
 */
import org.mybatis.spring.annotation.MapperScan;
//import space.qmen.lot.dao.CityDao;
//import space.qmen.lot.domain.City;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * Spring Boot 应用启动类
 *
 * Created by bysocket on 16/4/26.
 */
// Spring Boot 应用的标识
@SpringBootApplication

// mapper 接口类扫描包配置
@MapperScan("space.qmen.lot.dao")
public class Application {

    public static void main(String[] args) {
        // 程序启动入口
        // 启动嵌入式的 Tomcat 并初始化 Spring 环境及其各 Spring 组件
        SpringApplication.run(Application.class, args);
    }

}