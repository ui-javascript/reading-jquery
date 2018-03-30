package space.qmen.lot.model.dto;

import lombok.Data;

import java.util.List;

@Data
public abstract class PageDTO extends BaseDTO {
    private Integer count;

    public abstract List getItems();
}