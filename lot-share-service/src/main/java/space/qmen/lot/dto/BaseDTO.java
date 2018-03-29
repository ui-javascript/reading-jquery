package space.qmen.lot.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import java.io.Serializable;

@SuppressWarnings("serial")
// 驼峰转下划线
//@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public abstract class BaseDTO implements Serializable {
//    private Integer no;

    public BaseDTO() { }

//    public Integer getNo() {
//     return no;
//    }
//
//    public void setNo(Integer no) {
//     this.no = no;
//    }
}
