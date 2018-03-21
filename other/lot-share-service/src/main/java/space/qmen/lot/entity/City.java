package space.qmen.lot.entity;


import lombok.Data;

/**
 * 城市实体类
 *
 * Created by bysocket on 07/02/2017.
 */
@Data
public class City {

    /**
     * 城市编号
     */
    private Long id;

    /**
     * 省份编号
     */
    private Long provinceId;

    /**
     * 城市名称
     */
    private String cityName;

    /**
     * 描述
     */
    private String description;
}
