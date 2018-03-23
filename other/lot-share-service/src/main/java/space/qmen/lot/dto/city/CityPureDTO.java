package space.qmen.lot.dto.city;

import lombok.Data;
import space.qmen.lot.dto.BaseDTO;

@Data
public class CityPureDTO extends BaseDTO {


    private Long id;

    // 省份id不显示
    // private Long provinceId;

    private String cityName;
    private String description;

}
