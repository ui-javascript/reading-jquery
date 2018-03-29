package space.qmen.lot.utils;

import space.qmen.lot.common.enums.EnumMsg;
import space.qmen.lot.common.exception.ServiceException;
import space.qmen.lot.entity.Result;

public class ResultUtil {

    public static Result getResult(int status, String msg, Object data) {
        Result result = new Result();

        result.setCode(status);
        result.setMsg(msg);

//        if (data instanceof PageDTO) {
//            result.setCount(((PageDTO) data).getCount());
//            result.setData(((PageDTO) data).getItems());
//        } else {
//            result.setData(data);
//        }

        result.setData(data);
        return result;
    }

    public static Result getResult(int status, String msg) {
        Result result = new Result();
        result.setCode(status);
        result.setMsg(msg);
        return result;
    }

    public static Result getResultWithSuccess(Object data) {
        return getResult(200, "成功", data);
    }

    public static Result getResultWithSuccess() {
        return getResult(200, "成功");
    }

    public static Result getErrorByEnum(EnumMsg<Integer> enumMsg) {
        return getResult((Integer) enumMsg.getCode(), enumMsg.getMsg());
    }

    public static ServiceException getExceptionByEnum(EnumMsg<Integer> enumMsg) {
        return new ServiceException((Integer) enumMsg.getCode(), enumMsg.getMsg());
    }

}